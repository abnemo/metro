import { FilterFunction } from '../../services/media/media-uploader.service';

export interface FileUploaderOptions {
  allowedMimeType?: Array<string>;
  allowedFileType?: Array<string>;
  autoUpload?: boolean;
  filters?: Array<FilterFunction>;
  maxFileSize?: number;
  queueLimit?: number;
  showQueue?: boolean;
  showDropZone?: boolean; // added
  multipleUpload?: boolean;
  removeAfterUpload?: boolean;
  url?: any;
  itemAlias?: string;
  uploadFolder: string;
}
