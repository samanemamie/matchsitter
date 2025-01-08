import ProfileServer from '@/components/feature/ProfileServer'
import ProfileForm from '@/components/pages/dashboard/profile/ProfileForm'
import ProfileImages from '@/components/pages/dashboard/profile/ProfileImages'

export default async function ProfilePage() {
  // const {
  //   data: { user },
  // } = await getCurrentUser()

  // console.log(user, 'user')

  return (
    <div className="flex flex-col items-center gap-10 py-12 md:items-start">
      <ProfileServer>
        <ProfileImages />
        <ProfileForm />
      </ProfileServer>
    </div>
  )
}
