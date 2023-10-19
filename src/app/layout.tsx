import './globals.css'
import {Inter} from 'next/font/google'
import {NextPage} from "next";
import {MSWComponent} from "@/app/_component/MSWComponent";
import AuthSession from "@/app/_component/AuthSession";

const inter = Inter({subsets: ['latin']})

interface Props {
  children: React.ReactNode,
}

const RootLayout: NextPage<Props> = ({
                                       children
                                     }) => {
  return (
    <html lang="en">
    <body className={inter.className}>
    <MSWComponent />
    <AuthSession>
      {children}
    </AuthSession>
    </body>
    </html>
  )
}

export default RootLayout;