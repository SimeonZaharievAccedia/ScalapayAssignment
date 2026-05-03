const axios = require('axios');

describe('Scalapay Payment API', () => {
  const url = 'https://integration.api.scalapay.com/v2/payments/A1KQ7URT63';

  test('check payment GET is 200 and verify values', async () => {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer qhtfs87hjnc12kkos`,
        Accept: 'application/json',
      },
    });

    expect(response.status).toBe(200);

    const body = response.data;

    expect(body).toHaveProperty('created');
    expect(body).toHaveProperty('status');
    expect(body).toHaveProperty('captureStatus');
    expect(body).toHaveProperty('totalAmount');

    expect(body.status).toBe('charged');
    expect(body.captureStatus).toBe('captured');

    expect(body.totalAmount).toHaveProperty('amount');
    expect(body.totalAmount).toHaveProperty('currency');

    expect(body.totalAmount.currency).toBe('EUR');

    expect(body.totalAmount.amount).toBe(113.56);
  });
});