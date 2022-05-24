import { Controller, Get } from '@nestjs/common'
import { BudgetService } from './budget.service'
import { IBudgetItem } from './interfaces/budgetTypes'

@Controller()
export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}

    @Get('history')
    getAllHistory(): IBudgetItem[] {
        return this.budgetService.getAllHistory()
    }
}