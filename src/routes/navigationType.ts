/* eslint-disable @typescript-eslint/no-namespace */
import { AppStackParamList, AuthStackParamList } from '@routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList { }
  }
}

export type AppScreenPros<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>

export type AuthScreenPros<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>