
import ProdutosList from './components/page/produto/list.vue'
import ProdutosEdit from './components/page/produto/edit.vue'
const Bar = { template: '<div>bar</div>' }
export const routes = [
  {
    path: '/produtos',
    name: 'ProdutosList',
    component: ProdutosList
  },
  {
    path: '/produtos/:id',
    name: 'ProdutosEdit',
    component: ProdutosEdit,
    props: true
  }
];
