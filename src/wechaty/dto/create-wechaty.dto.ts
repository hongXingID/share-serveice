export class CreateWechatyDto {
  name: string;
}

export class ExecWechatyCodeDto {
  botId: string;
  codes: string[];
}

export class RemoveWechatyInstanceDto {
  botId: string;
}
