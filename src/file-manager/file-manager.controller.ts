import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { FileManagerService } from './file-manager.service';

@Controller('file-manager')
export class FileManagerController {
  constructor(private readonly fileManagerService: FileManagerService) {}

  @Post('create-directory')
  async createDirectory(@Body('path') directoryPath: string): Promise<void> {
    return this.fileManagerService.createDirectory(directoryPath);
  }

  @Get('list')
  async getFilesList(@Query('path') directoryPath: string): Promise<string[]> {
    return this.fileManagerService.getFilesList(directoryPath);
  }

  @Get(':filePath')
  async getFileStats(
    @Param('filePath') filePath: string,
    @Res() response: any,
  ) {
    const stats = await this.fileManagerService.getFileStats(filePath);
    response.send(stats);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          // 自定义文件保存逻辑
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: any): Promise<void> {
    console.log(file.path); // 文件保存路径
  }

  @Get('download/:filePath')
  async downloadFile(
    @Param('filePath') filePath: string,
    @Res() response: any,
  ) {
    const filePathToSend = join(process.cwd(), filePath); // 确保文件路径正确
    await this.fileManagerService.streamFile(filePathToSend, response);
  }
}
