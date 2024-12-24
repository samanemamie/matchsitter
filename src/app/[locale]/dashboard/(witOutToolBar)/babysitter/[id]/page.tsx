interface Props {
  params: Promise<{ id: string }>
}

export default async function SingleBabysitterPage({ params }: Props) {
  const { id } = await params
  return <div>SingleBabysitterPage</div>
}
