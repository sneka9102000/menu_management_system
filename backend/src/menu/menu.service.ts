import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async getMenus() {
    return this.prisma.menu.findMany();
  }

  async getMenu(id: number) {
    return this.prisma.menu.findUnique({
      where: { id },
      include: { children: true },
    });
  }

  async createMenu(data: { name: string; parentId?: number }) {
    return this.prisma.menu.create({ data });
  }

  async updateMenu(id: number, data: { name?: string; parentId?: number }) {
    return this.prisma.menu.update({ where: { id }, data });
  }

  async deleteMenu(id: number) {
    return this.prisma.menu.delete({ where: { id } });
  }
}