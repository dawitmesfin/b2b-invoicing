import { Payment } from '../entities/payment.entity';
import { InvoicesService } from './invoices.service';
import { Company } from '../entities/company.entity';
import { Invoice, InvoiceStatus } from '../entities/invoice.entity';
import { User } from '../entities/user.entity';
import { BalancesService } from './balances.service';
import { TreezorService } from '../../payment/treezor.service';
import { IBeneficiary } from '../../payment/interfaces/treezor/beneficiary.interface';
import { NestSchedule } from 'nest-schedule';
import { PaymentRepository } from '../repositories/payment.repository';
import { Repository } from 'typeorm';
import { ContactsService } from './contacts.service';
import { PaymentNotification } from '../entities/payment-notification.entity';
import { PaymentsWorkflow } from '../workflow/payments.workflow';
import { ZendeskService } from '../../notification/zendesk.service';
export declare class PaymentsService extends NestSchedule {
    private readonly paymentRepository;
    private readonly invoiceRepository;
    private readonly paymentNotificationRepository;
    private readonly invoicesService;
    private readonly balancesService;
    private readonly contactsService;
    private readonly treezorService;
    private readonly paymentsWorkflow;
    private readonly zendeskService;
    constructor(paymentRepository: PaymentRepository, invoiceRepository: Repository<Invoice>, paymentNotificationRepository: Repository<PaymentNotification>, invoicesService: InvoicesService, balancesService: BalancesService, contactsService: ContactsService, treezorService: TreezorService, paymentsWorkflow: PaymentsWorkflow, zendeskService: ZendeskService);
    payoutContacts(user: User, invoiceId: string, contactIds: string[]): Promise<boolean>;
    payout(user: User, invoiceId: string, date?: Date, code?: string): Promise<Invoice[]>;
    createBeneficiary(user: User, invoice: Invoice, payment?: Payment): Promise<IBeneficiary>;
    checkKyc(company: Company): Promise<boolean>;
    findOneByInvoice(invoice: Invoice): Promise<Payment>;
    updateLibeoBalance(company: Company, currentPayment?: Payment): Promise<void>;
    checkBeneficiary(beneficiaryId: number): Promise<boolean>;
    deferredPayments(): Promise<void>;
    updateInvoiceStatus(id: string, status: InvoiceStatus, user: User): Promise<Invoice[]>;
}