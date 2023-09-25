use anchor_lang::prelude::*;

declare_id!("zQR22LLhXfjBRB9woeHx93Tk4HDpZAwVXLNFh4VYZCb");

#[program]
pub mod testprogramyt {
    use super::*;

    pub fn test_function(_ctx: Context<TestFunction>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct TestFunction {}
