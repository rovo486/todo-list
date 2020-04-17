<template>
  <div>
    <Header
      :new-message-count="newMessageCount"
    />
    <div class="container mx-auto mt-5">
      <ChatList
        :chat-list="chatList"
        @read-item="readChatItem"
      />
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Header from './Header';
import ChatList from './ChatList';

export default {
  data() {
    return {
     
    };
  },
  computed: {
    newMessageCount() {
      return this.chatList.map(item => item.new).reduce((a, b) => a + b);
    },
    ...mapState({
      chatList: 'chatList'
    })
  },
  methods: {
    readChatItem(chatItem) {
      this.chatList.filter(item => item.id === chatItem.id)[0].new = 0;
    }
  },
  components: {
    Header,
    ChatList
  }
}
</script>

<style>
</style>