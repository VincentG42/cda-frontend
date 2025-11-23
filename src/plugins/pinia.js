import { createPinia } from 'pinia';

export default (app) => {
  console.log('Installing Pinia plugin...');
  const pinia = createPinia();
  app.use(pinia);
};
