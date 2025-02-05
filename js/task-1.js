const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line

  getBalance() {
    return this.balance; //Звернення до властивості balance
  },

  getDiscount() {
    return this.discount; //Звернення до властивості discount
  },

  setDiscount(value) {
    this.discount = value; //Звернення до властивості discount
  },

  getOrders() {
    return this.orders; //Звернення до властивості orders
  },

  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount; //Звернення до властивостей balance, discount
    this.orders.push(order); //Звернення до властивості orders
  },

  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
