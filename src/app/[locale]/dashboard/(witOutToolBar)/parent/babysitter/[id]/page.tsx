interface Props {
  params: Promise<{ id: number }>
}

export default async function SingleBabysitterPage({ params }: Props) {
  const { id } = await params

  // const singleBabysitterData = BABY_SITTER.find((item) => item.id === id)

  // console.log(singleBabysitterData, 'singleBabysitterData')

  return <div>SingleBabysitterPage</div>
}
