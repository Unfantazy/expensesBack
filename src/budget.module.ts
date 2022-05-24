import { Module } from '@nestjs/common'
import { BudgetController } from './budget/budget.controller'
import { BudgetService } from './budget/budget.service'

@Module({
    imports: [],
    controllers: [BudgetController],
    providers: [BudgetService],
})
export class BudgetModule {}
