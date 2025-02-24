export class CreateAiChatDto {
  user_id: string;
  message: string;
}

export class SendAiChatDto {
  user_id: string;
  messages: { role: string; content: string }[];
}
