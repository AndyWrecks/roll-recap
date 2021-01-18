import { filter, map } from "lodash";

function getAllRollMessages(allChatMessages: Messages): any[] {
  return filter(allChatMessages.entities, (chatMessage: ChatMessage) => {
    if (chatMessage.isRoll) {
      return chatMessage.roll;
    }
  });
}

function getRollDataFromMessages(chatMessages: ChatMessage[]) {
  return map(chatMessages, (chatMessage) => chatMessage.roll);
}

// TODO:
// Create popup to display rollData
// Breakdown data by user
// Breakdown data by actor
// Breakdown data by game session
// Expose data for CG dashboard
// Get code on github

Hooks.on("ready", function () {
  const allChatMessages: Messages = game.messages;
  const rolls: ChatMessage[] = getAllRollMessages(allChatMessages);
  const rollData: Roll[] = getRollDataFromMessages(rolls);

  console.log("rolls", rolls);
  console.log("rollData", rollData);
});
