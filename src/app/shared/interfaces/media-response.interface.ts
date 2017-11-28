import { IMediaItem } from './media-item.interface';
import { FileItem } from './file/file-item.interface';

export interface IMediaResponse {
  fileItem: FileItem;
  mediaItem: IMediaItem;
}
