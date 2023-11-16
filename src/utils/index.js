import router from '@/router'

export const viewProduct = (routeId) => {
  const formatedRoute = String(routeId).toLowerCase().split(" ").join("-");
  // router.push({name: 'product', params: { id: formatedRoute } });
  router.push(`/product/${formatedRoute}`);
}