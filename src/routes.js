
import ProdutosList from './components/page/produto/list.vue'
import ProdutosEdit from './components/page/produto/edit.vue'

export const routes = [
  {
    path: '/produtos',
    name: 'ProdutosList',
    component: ProdutosList
  },
  {
    path: '/produtos/edit/:id',
    name: 'ProdutosEdit',
    component: ProdutosEdit,
    props: true
  }
];
