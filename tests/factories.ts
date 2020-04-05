export const basketFactory = () => ({
  "_id": {
    "$oid": "5e87a4d300a8bfc700d2bd53"
  },
  "user_id": {
    "$oid": "5e87a4c30051323000d2bd52"
  },
  "content": [
    {
      "product_id": {
        "$oid": "5e4fae1e005ef1f200b4873d"
      },
      "count": 3
    },
    {
      "product_id": {
        "$oid": "5e4fadf100d3fd0700b4873c"
      },
      "count": 1
    }
  ],
  "active": true,
  "product_info": [
    {
      "_id": {
        "$oid": "5e4fadf100d3fd0700b4873c"
      },
      "product_unit_id": {
        "$oid": "5e4e7e8b00cadfb5008fdce5"
      },
      "name": "1 lt Doğal Keçi Sütü",
      "size": "1lt",
      "price": 15,
      "old_price": 20
    },
    {
      "_id": {
        "$oid": "5e4fae1e005ef1f200b4873d"
      },
      "product_unit_id": {
        "$oid": "5e4e7e8b00cadfb5008fdce5"
      },
      "name": "5 lt Doğal Keçi Sütü",
      "size": "5lt",
      "price": 75,
      "old_price": 100
    }
  ]
})