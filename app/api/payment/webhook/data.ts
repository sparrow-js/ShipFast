export default {
    "meta": {
      "test_mode": true,
      "event_name": "order_created",
      "custom_data": {
        "type": "single",
        "email": "sparrowwht7@gmail.com",
        "userId": "user_2bTbFYdCZfZAkiyytuJR2jByR4v",
        "username": "haitao"
      },
      "webhook_id": "2446a613-6866-4b22-9713-83126109cac4"
    },
    "data": {
      "type": "orders",
      "id": "2116336",
      "attributes": {
        "store_id": 70555,
        "customer_id": 2312291,
        "identifier": "c57d9302-eeb9-4776-b33f-ef6aac66ff06",
        "order_number": 705553,
        "user_name": "haitao wu",
        "user_email": "sparrowwht7@gmail.com",
        "currency": "USD",
        "currency_rate": "1.00000000",
        "tax_name": null,
        "tax_rate": "0.00",
        "tax_inclusive": false,
        "status": "paid",
        "status_formatted": "Paid",
        "refunded": false,
        "refunded_at": null,
        "subtotal": 999,
        "discount_total": 0,
        "tax": 0,
        "setup_fee": 0,
        "total": 999,
        "subtotal_usd": 999,
        "discount_total_usd": 0,
        "tax_usd": 0,
        "setup_fee_usd": 0,
        "total_usd": 999,
        "subtotal_formatted": "$9.99",
        "discount_total_formatted": "$0.00",
        "tax_formatted": "$0.00",
        "setup_fee_formatted": "$0.00",
        "total_formatted": "$9.99",
        "first_order_item": {
          "id": 2077443,
          "order_id": 2116336,
          "product_id": 193313,
          "variant_id": 255600,
          "price_id": 319790,
          "product_name": "pagemaker",
          "variant_name": "test-one-off",
          "price": 999,
          "quantity": 1,
          "created_at": "2024-02-18T12:22:39.000000Z",
          "updated_at": "2024-02-18T12:22:39.000000Z",
          "test_mode": true
        },
        "urls": {
          "receipt": "https://app.lemonsqueezy.com/my-orders/c57d9302-eeb9-4776-b33f-ef6aac66ff06?signature=6af476f78cc90fb67ba60326edbb1f86c42ed3a804b9f8f489c7b2aeb4859167"
        },
        "created_at": "2024-02-18T12:22:38.000000Z",
        "updated_at": "2024-02-18T12:22:39.000000Z",
        "test_mode": true
      },
      "relationships": {
        "store": {
          "links": {
            "related": "https://api.lemonsqueezy.com/v1/orders/2116336/store",
            "self": "https://api.lemonsqueezy.com/v1/orders/2116336/relationships/store"
          }
        },
        "customer": {
          "links": {
            "related": "https://api.lemonsqueezy.com/v1/orders/2116336/customer",
            "self": "https://api.lemonsqueezy.com/v1/orders/2116336/relationships/customer"
          }
        },
        "order-items": {
          "links": {
            "related": "https://api.lemonsqueezy.com/v1/orders/2116336/order-items",
            "self": "https://api.lemonsqueezy.com/v1/orders/2116336/relationships/order-items"
          }
        },
        "subscriptions": {
          "links": {
            "related": "https://api.lemonsqueezy.com/v1/orders/2116336/subscriptions",
            "self": "https://api.lemonsqueezy.com/v1/orders/2116336/relationships/subscriptions"
          }
        },
        "license-keys": {
          "links": {
            "related": "https://api.lemonsqueezy.com/v1/orders/2116336/license-keys",
            "self": "https://api.lemonsqueezy.com/v1/orders/2116336/relationships/license-keys"
          }
        },
        "discount-redemptions": {
          "links": {
            "related": "https://api.lemonsqueezy.com/v1/orders/2116336/discount-redemptions",
            "self": "https://api.lemonsqueezy.com/v1/orders/2116336/relationships/discount-redemptions"
          }
        }
      },
      "links": {
        "self": "https://api.lemonsqueezy.com/v1/orders/2116336"
      }
    }
  }