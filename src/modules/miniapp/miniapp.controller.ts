import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MiniappService } from './miniapp.service';
import { CreateMiniappDto } from './dto/create-miniapp.dto';
import { UpdateMiniappDto } from './dto/update-miniapp.dto';

@Controller('miniapp')
export class MiniappController {
  constructor(private readonly miniappService: MiniappService) {}

  @Get('tree')
  getTree() {
    return this.miniappService.tree();
  }
}
