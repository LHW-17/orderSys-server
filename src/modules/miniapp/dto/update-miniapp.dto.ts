import { PartialType } from '@nestjs/mapped-types';
import { CreateMiniappDto } from './create-miniapp.dto';

export class UpdateMiniappDto extends PartialType(CreateMiniappDto) {}
