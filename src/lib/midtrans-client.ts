import midtransClient from 'midtrans-client';

export class MidtransService {
  private snap: any;

  constructor() {
    this.snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY!,
      clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!
    });
  }

  async createTransaction(orderData: {
    order_id: string;
    gross_amount: number;
    customer_details: {
      first_name: string;
      email?: string;
      phone?: string;
    };
    item_details: Array<{
      id: string;
      price: number;
      quantity: number;
      name: string;
    }>;
  }) {
    try {
      const parameter = {
        transaction_details: {
          order_id: orderData.order_id,
          gross_amount: orderData.gross_amount,
        },
        customer_details: orderData.customer_details,
        item_details: orderData.item_details,
        credit_card: {
          secure: true
        }
      };

      const transaction = await this.snap.createTransaction(parameter);
      return {
        token: transaction.token,
        redirect_url: transaction.redirect_url
      };
    } catch (error) {
      console.error('Midtrans error:', error);
      throw new Error('Failed to create payment transaction');
    }
  }

  async handleNotification(payload: any) {
    try {
      const statusResponse = await this.snap.transaction.notification(payload);
      
      const orderId = statusResponse.order_id;
      const transactionStatus = statusResponse.transaction_status;
      const fraudStatus = statusResponse.fraud_status;

      // Check transaction status
      if (transactionStatus == 'capture') {
        if (fraudStatus == 'accept') {
          return { orderId, status: 'paid' };
        }
      } else if (transactionStatus == 'settlement') {
        return { orderId, status: 'paid' };
      } else if (transactionStatus == 'cancel' || 
                 transactionStatus == 'deny' || 
                 transactionStatus == 'expire') {
        return { orderId, status: 'failed' };
      } else if (transactionStatus == 'pending') {
        return { orderId, status: 'pending' };
      }

      return { orderId, status: 'unknown' };
    } catch (error) {
      console.error('Midtrans notification error:', error);
      throw new Error('Failed to process payment notification');
    }
  }
}

export const midtransService = new MidtransService();
