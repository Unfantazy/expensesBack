import { Injectable } from '@nestjs/common'
import { IBudgetItem } from './interfaces/budgetTypes'
import { budgetDB } from './db/db'

@Injectable()
export class BudgetService {
    getAllHistory(): IBudgetItem[] {
        return budgetDB
    }
}
