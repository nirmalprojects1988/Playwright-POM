import{test} from "@playwright/test"
import{LoginPage} from "../Pages/LoginPage.ts"

test.beforeEach(async ({page}) => {
   // console.log(process.env.URl)
    //let url = process.env.URL as string;
    await page.goto(process.env.URL)

});
test('login to lamdatest',async({page})=>{
const loginpage=new LoginPage(page)
await loginpage.clickOnMyAccount();
await loginpage.enterLoginDetails('webtestingu@gmail.com','lamdatest')
await loginpage.clickonLogin()
//await loginpage.assertsuccessfullLogout('Account Logout')
});
test.afterEach(async({page})=>{
const loginpage=new LoginPage(page)
await loginpage.assertsuccessfullLogout('Account Logout')
page.close()
});