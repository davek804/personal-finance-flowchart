bubbles = [
{ 
	"id" : 0,
	"category" : 0, 
	"title" : "Step 0: Budget", 
	"body" : "Budget & reduce expenses, set realistic goals." 
},
{ 
	"id" : 1,
	"category" : 1, 
	"title" : "Step 1: E-Fund", 
	"body" : "Build an emergency fund" 
},
{ 
	"id" : 2,
	"category" : 2,
	"title" : "Step 2: Matching", 
	"body" : "Employer-sponsored matching funds" 
},
{ 
	"id" : 3,
	"category" : 3, 
	"title" : "Step 3: Debts", 
	"body" : "Pay down high/moderate interest debts" 
},
{ 
	"id" : 4,
	"category" : 4,
	"title" : "Step 4: Retirement", 
	"body" : "Save for retirement in an IRA & higher ed. expenses" 
},
{ 
	"id" : 5,
	"category" : 5,
	"title" : "Step 5: More Ret.", 
	"body" : "Save more for retirement" 
},
{ 
	"id" : 6,
	"category" : 6, 
	"title" : "Step 6: Advanced", 
	"body" : "Save for other goals & advanced methods" 
},
{ 
	"id" : 7,
	"category" : 0,
	"title" : "Pay Rent/Mortgage", 
	"body" : "(Including renters or homeowners insurance, if required)" 
},
{ 
	"id" : 8,
	"category" : 0,
	"title" : "Buy Food/Groceries", 
	"body" : "(Depending on the severity of your situation and needs, you may wish to prioritize utilities before this node)" 
},
{ 
	"id" : 9,
	"category" : 0,
	"title" : "Buy Food/Groceries", 
	"body" : "(Depending on the severity of your situation and needs, you may wish to prioritize utilities before this node)" 
},
{ 
	"id" : 10,
	"category" : 0,
	"title" : "Pay Essential Items", 
	"body" : "(Power, water, heat, toiletries, etc)" 
},
{ 
	"id" : 11,
	"category" : 0,
	"title" : "Pay Income Earning Expenses", 
	"body" : "(Necessary transportation expenses, possibly internet/phone, anything required to continue earning income" 
},
{ 
	"id" : 12,
	"category" : 0,
	"title" : "Create Budget", 
	"body" : "(Fundamental to a sound financial footing is knowing where your money is going, budgeting helps you see your sources of income less your expenses.)", 
	"links" : {"to" : 13, "as" : null}
},
{ 
	"id" : 13,
	"category" : 0,
	"title" : "Make Minimum Payments On All Debts & Loans", 
	"body" : "(Student loans, credit cards, etc.)" ,
	"links" : {"to" : 14, "as" : null}
},
{ 
	"id" : 14,
	"category" : 1,
	"title" : "Build Small Emergency Fund", 
	"body" : "(Either $1000 or one months' worth of expenses, whichever is greater; use a savings or checking account)",
	"links" : {"to" : 15, "as" : null} 
},
{ 
	"id" : 15,
	"category" : 1,
	"title" : "Pay Any Non-Essential Bills in Full", 
	"body" : "(Cable, Internet, phone, etc.)",
	"links" : {"to" : 99, "as" : null} 
},
{ 
	"id" : 16,
	"category" : 2,
	"title" : "Does your employer offer a retirement account with an employer match?", 
	"body" : "null",
	"links" : {
		"to" : 17, "as" : "yes",
		"to" : 18, "as" : "no" } 
},
{ 
	"id" : 17,
	"category" : 2,
	"title" : "Contribute the amount needed to get the full employer match, but nothing above that amount.", 
	"body" : "null",
	"links" : {"to" : 18, "as" : null} 
},
{ 
	"id" : 18,
	"category" : 3,
	"title" : "Do you have any high interest debt?", 
	"body" : "(i.e., debt with an interest rate of 10% or higher)",
	"links" : {
		"to" : 19, "as" : "yes",
		"to" : 20, "as" : "no" }  
},
{ 
	"id" : 19,
	"category" : 3,
	"title" : "Evaluate the merits of the \"Avalanche\" and \"Snowball\" methods and their advantages in your personal financial/psychological situation and apply accordingly to pay off these debts.", 
	"body" : "null" 
},
{ 
	"id" : 20,
	"category" : 1,
	"title" : "Increase Emergency Fund to 3-6 Months Living Expenses", 
	"body" : "(Use a savings or checking account)",
	"links" : {"to" : 21, "as" : null}
},
{ 
	"id" : 21,
	"category" : 3,
	"title" : "Do you have any moderate interest debt?", 
	"body" : "(i.e., remaining debt over 4-5% interest rate, excluding mortgage)",
	"links" : {
		"to" : 22, "as" : "yes",
		"to" : 23, "as" : "no" } 
},
{ 
	"id" : 22,
	"category" : 3,
	"title" : "Evaluate the merits of the \"Avalanche\" and \"Snowball\" methods and their advantages in your personal financial/psychological situation and apply accordingly to pay off these debts.", 
	"body" : "null" 
},
{ 
	"id" : 23,
	"category" : 4,
	"title" : "Evaluate the merits of a Roth vs. Traditional IRA in the context of your personal financial situation and max the yearly contributions accordingly.", 
	"body" : "null",
	"links" : {"to" : 24, "as" : null} 
},
{ 
	"id" : 24,
	"category" : 4,
	"title" : "Are you expecting any large, required purchases or personal investments in the near future?", 
	"body" : "(College, professional certifications, a car so you can get to work, etc.)",
	"links" : {
		"to" : 25, "as" : "yes",
		"to" : 26, "as" : "no" }  
},
{ 
	"id" : 25,
	"category" : 4,
	"title" : "Save the amount needed for these expenses in a savings or checking account.", 
	"body" : "null",
	"links" : {"to" : 26, "as" : null}
},
{ 
	"id" : 26,
	"category" : 5,
	"title" : "Are you currently saving at least 15% of your pre-tax income for retirement?", 
	"body" : "(Total contributions to all retirement acounts; note that you may need to save more if you are behind on retirement savings.)",
	"links" : {
		"to" : 30, "as" : "yes",
		"to" : 27, "as" : "no" }  
},
{ 
	"id" : 27,
	"category" : 5,
	"title" : "Does your employer offer a 401(k), 403(b), or similar retirement plan into which you could save more money?", 
	"body" : "null",
	"links" : {
		"to" : 28, "as" : "yes",
		"to" : 29, "as" : "no" }  
},
{ 
	"id" : 28,
	"category" : 5,
	"title" : "Increase contributions until you have reached 15% pre-tax income being saved for retirement.", 
	"body" : " " 
},
{ 
	"id" : 29,
	"category" : 5,
	"title" : "If self-employed, contribute to an individual 401(k), SEP-IRA, or SIMPLE IRA to reach 15% pre-tax income saved; if not self-employed, contribute to a taxable account to reach this goal.", 
	"body" : "null",
	"links" : {"to" : 26, "as" : null} 
},
{ 
	"id" : 30,
	"category" : 6,
	"title" : "Do you have a qualified high-deductible health plan and are thus eligible for an investable HSA?", 
	"body" : "null",
	"links" : {
		"to" : 31, "as" : "yes",
		"to" : 32, "as" : "no" }  
},
{ 
	"id" : 31,
	"category" : 6,
	"title" : "Max yearly HSA contributions", 
	"body" : "null",
	"links" : {"to" : 32, "as" : null}  
},
{ 
	"id" : 32,
	"category" : 6,
	"title" : "Do you have children and wish to help pay for some or all of their college expenses?", 
	"body" : "null",
	"links" : {
		"to" : 33, "as" : "yes",
		"to" : 34, "as" : "no" }  
},
{ 
	"id" : 33,
	"category" : 6,
	"title" : "Evaluate available savings/investment options, such as a 529 plan, and contribute accordingly.", 
	"body" : "null",
	"links" : {"to" : 34, "as" : null} 
},
{ 
	"id" : 34,
	"category" : 6,
	"title" : "At this point, you have some options on how to proceed, and it is completely up to you and your personal goals and desires.", 
	"body" : " ",
	"links" : {
		"to" : 35, "as" : null,
		"to" : 36, "as" : null }
},
{ 
	"id" : 35,
	"category" : 6,
	"title" : "Would you like to retire early?", 
	"body" : "null",
	"links" : {"to" : 37, "as" : "yes"} 
},
{ 
	"id" : 36,
	"category" : 6,
	"title" : "Do you have more immediate goals?", 
	"body" : "",
	"links" : {"to" : 38, "as" : "yes"} 
},
{ 
	"id" : 37,
	"category" : 6,
	"title" : "Max out 401(k), 403(b), or other employer sponsored account, consider the \"mega backdoor Roth IRA\", then use a taxable account", 
	"body" : "null" 
},
{ 
	"id" : 38,
	"category" : 6,
	"title" : "Use savings for goals sooner than 3-5 years, a conservative mix of stocks and bonds for goals more than 3-5 years away.", 
	"body" : "(Common examples include down payments for homes, saving for vehicles, paying down a mortgage, and vacation funds.)" 
}
]