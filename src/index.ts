import { filter } from "lodash";

function getAllRolls(allChatMessages: Messages) {
  const roll: any = filter(
    allChatMessages.entities,
    (chatMessage: ChatMessage) => {
      if (chatMessage.isRoll) {
        return chatMessage.data;
      }
    }
  );
  return roll;
}

function component() {
  Hooks.on("ready", function () {
    const allChatMessages: Messages = game.messages;
    const rolls = getAllRolls(allChatMessages);

    console.log(rolls);
  });
}

component();
