//@ts-check
import{type Page,expect} from "@playwright/test"

export class LoginPage{
    readonly page:Page
     readonly my_account: any
    readonly e_Mail:any
    readonly password:any
    readonly btnlogin:any
    readonly lnklogout:any
    readonly logoutconfirmmtxt:any

    constructor(page:any){
        this.page=page
         this.my_account=page.getByRole('button', { name: ' My account' })
        this.e_Mail=page.getByPlaceholder('E-Mail Address')
        this.password=page.getByPlaceholder('Password')
        this.btnlogin=page.getByRole('button', { name: 'Login' })
        this.lnklogout=page.getByText('Logout')
        this.logoutconfirmmtxt=page.getByRole('heading',{name: 'Account Logout'})
        

    }
     async clickOnMyAccount(){
        await this.my_account.click({force:true})
    }

     async enterLoginDetails(email:string,password:string){
        await this.e_Mail.fill(email)
        await this.password.fill(password)
       
    }
    async clickonLogin(){
        await this.btnlogin.click()
    }
    async assertsuccessfullLogout(validationmessage:string){
        await this.clickOnMyAccount()
        await this.lnklogout.nth(1).click({force:true})
        await expect(this.logoutconfirmmtxt).toHaveText(validationmessage)
    }

}