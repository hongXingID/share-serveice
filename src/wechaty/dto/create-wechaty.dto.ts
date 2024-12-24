export class CreateWechatyDto {
  name: string;
}

export class ExecWechatyCodeDto {
  botId: string;
  code: string;
}

export class RemoveWechatyInstanceDto {
  botId: string;
}
