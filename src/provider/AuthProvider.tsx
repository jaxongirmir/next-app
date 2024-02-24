import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'
import { TypeUser } from '@/components/interface/user.interface'
import { TypeComponentsAuthFields } from '@/components/interface/page.interface'
import NotFound from '@/pages/404'

type TypeContext = {
  user: TypeUser
  setUser: Dispatch<SetStateAction<TypeUser>>
}

export const AuthContext = createContext<TypeContext>({
  user: null,
  setUser: () => {},
})

const AuthProvider: FC<PropsWithChildren<TypeComponentsAuthFields>> = ({
  children,
  Component: { isOnlyUser },
}) => {
  const [user, setUser] = useState<TypeUser>(null)
  if (isOnlyUser && !user) return <NotFound />
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
