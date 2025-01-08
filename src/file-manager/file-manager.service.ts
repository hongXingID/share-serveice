// file-manager.service.ts
import { Injectable } from '@nestjs/common';
import { mkdir, readdir, stat } from 'fs';

@Injectable()
export class FileManagerService {
  // 创建目录
  async createDirectory(directoryPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      mkdir(directoryPath, { recursive: true }, (error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }

  // 读取目录下文件列表
  async getFilesList(directoryPath: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      readdir(directoryPath, (error, files) => {
        if (error) reject(error);
        else resolve(files);
      });
    });
  }

  // 获取文件状态
  async getFileStats(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      stat(filePath, (error, stats) => {
        if (error) reject(error);
        else resolve(stats);
      });
    });
  }

  // 流式传输文件
  async streamFile(filePath: string, response: any): Promise<void> {
    response.sendFile(filePath); // 使用Express响应对象的sendFile方法
  }
}
