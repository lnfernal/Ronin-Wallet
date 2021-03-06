import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({})
export default class Header extends Vue {
  @Getter('account') account;

  lock() {
    this.$store.commit('setAccount', null);
    this.$router.push('/');
  }
}
