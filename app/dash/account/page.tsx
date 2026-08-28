import { ReactiveBar } from "@/src/components/ui/navbar/reactiveBar";

export default function Account() {
  var quotes = // * Look, I got bored, ok?
    [
      "Bold of you to assume that I have implemented account functionality.", 
      "Does this app even need an account function? What's the point?", 
      "I'm too tired to add accounts, get me a coffee and I will.",
      "Sorry, I ran out of Claude credits, accounts are now postponed /j",
      "Fork this repo and add accounts yourself!!",
      "Hashing? What's that? I store credentials in plain JSON.",
      "accounts = security risk = no because bad for opsec",
      "Go learn without an account.",
      "I can't! I don't know anything about backend! Save me!",
      "No accounts. I made the project open source for a reason /s",
      "Hmm. How to add accounts without creating a security risk?",
      "Accounts will be added at ________ (it's a FOSSLingo question)",
      "I'm still bored, that's why I'm writing these quotes",
      "While you wait, try finding as many easter eggs you can in the FOSSLingo code!",
      "Fun Fact: iddu01 coded FOSSLingo on a Thinkpad T490, aswell on a Dell XPS 8940.",
      "Fun Fact 2: The Thinkpad runs Fedora, while the XPS runs Windows.",
      "Anything but adding the account functionality!!"
    ]
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex min-h-screen">
      <ReactiveBar highlitedIcon="account"/>
      <main className="flex flex-col flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Account</h1>
        </div>
        <hr className='border-neutral-800'/>
        <div className="flex flex-1 justify-center items-center pb-24 md:pb-0">
          <div className="flex-1 flex justify-center items-center">
            <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4">
              {randomQuote}
            </h1>
          </div>
        </div>
      </main>
    </div>
  )
}