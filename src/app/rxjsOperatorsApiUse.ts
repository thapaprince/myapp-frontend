// Example 1: ✅ concatMap (Sequential + Dependent APIs)
// Use case: User → Orders → Product (dependency chain)
of(1).pipe(
  concatMap(id => this.getUser(id)),
  concatMap(user => this.getOrders(user.id)),
  concatMap(order => this.getProduct(order.orderId))
).subscribe(res => {
  console.log('concatMap FINAL:', res);
});

 concatMap FINAL: { "product": "Laptop-10" } 


// Note: multiple call krana hai toh of(1) ke replace pe from([1,2,3]) then phir output =>({ "product": "Laptop-10" } 
// ,{ "product": "Laptop-20" } 
// ,{ "product": "Laptop-30" } )


// Example 3: 🔄 switchMap (Latest Only / Cancel Previous)
// Use case: Search / filter (latest result only)
from([1,2,3]).pipe(
  switchMap(id => this.getUser(id))
).subscribe(res => {
  console.log('switchMap:', res);
});

switchMap: { "id": 3 }

// Note: sirf last result previous api call cancel.

// Example 2: ⚡ mergeMap (Parallel + Independent APIs) 
// Use case: Same ID se multiple independent APIs

from([1,2,3]).pipe(
  mergeMap(id => this.getUser(id))
).subscribe(res => {
  console.log('mergeMap:', res);
});

mergeMap: { "id": 2 }
mergeMap: { "id": 1 }
mergeMap: { "id": 3 }

// Note: Parallel,fast, output give random order


// Example: ✅ forkJoin (Parallel + All Results Together)
forkJoin({
  user: this.getUser(1),
  order: this.getOrder(1),
  product: this.getProduct(1)
}).subscribe(res => {
  console.log('forkJoin FINAL:', res);
});

forkJoin FINAL: {
  "user": { "id": 1, "name": "Prince" },
  "order": { "orderId": 101 },
  "product": { "product": "Laptop" }
}

// Note: Sirf 1 baar output, Sabka data ek object me, Order maintain (keys ke hisaab se)

