use anchor_lang::prelude::*;

declare_id!("E7jshtpNnLNU6vHMEoFkhcF4YrDgKkjqQ8x6Rk2vFDg7");

#[program]
pub mod lab6 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
