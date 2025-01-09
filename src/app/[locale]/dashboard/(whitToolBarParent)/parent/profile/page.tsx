import ProfileServer from '@/components/feature/ProfileServer'
import ProfileForm from '@/components/pages/dashboard/profile/ProfileForm'
import ProfileImages from '@/components/pages/dashboard/profile/ProfileImages'

export default async function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <ProfileServer>
        <ProfileImages />
        <ProfileForm />
      </ProfileServer>
    </div>
  )
}
