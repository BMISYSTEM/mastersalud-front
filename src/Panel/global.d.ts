declare const WidgetCheckout: {
    new (config: {
      currency: string;
      amountInCents: number;
      reference: string;
      publicKey: string;
    }): any;
  };