import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async getMenus() {
    return this.menuService.getMenus();
  }

  @Get(':id')
  async getMenu(@Param('id') id: string) {
    return this.menuService.getMenu(+id);
  }

  @Post()
  async createMenu(@Body() data: { name: string; parentId?: number }) {
    return this.menuService.createMenu(data);
  }

  @Put(':id')
  async updateMenu(@Param('id') id: string, @Body() data: { name?: string; parentId?: number }) {
    return this.menuService.updateMenu(+id, data);
  }

  @Delete(':id')
  async deleteMenu(@Param('id') id: string) {
    return this.menuService.deleteMenu(+id);
  }
}