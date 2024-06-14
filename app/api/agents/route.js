import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://web24.mmi-stdie.fr/valentin/wp-json/wp/v2/agent');
    if (!response.ok) {
      throw new Error('Failed to fetch agents');
    }
    const data = await response.json();
    const agents = data.map(agent => ({
      displayName: agent.post_title,
      uuid: agent.ID,
      icon: agent.featured_image_url,
      description: agent.description,
      role: agent.terms.find(term => term.taxonomy === 'role')?.name || 'Unknown',
      competences: {
        a: agent.acf.competences.a ? {
          nom: agent.acf.competences.a.nom_a,
          description: agent.acf.competences.a.description_a,
          icone: agent.acf.competences.a.icone_a.url
        } : null,
        e: agent.acf.competences.e ? {
          nom: agent.acf.competences.e.nom_e,
          description: agent.acf.competences.e.description_e,
          icone: agent.acf.competences.e.icone_e.url
        } : null,
        c: agent.acf.competences.c ? {
          nom: agent.acf.competences.c.nom_c,
          description: agent.acf.competences.c.description_c,
          icone: agent.acf.competences.c.icone_c.url
        } : null,
        x: agent.acf.competences.x ? {
          nom: agent.acf.competences.x.nom_x,
          description: agent.acf.competences.x.description_x,
          icone: agent.acf.competences.x.icone_x.url
        } : null
      },
      fullPortrait: agent.acf.full_portrait
    }));
    return NextResponse.json(agents);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch agents' }, { status: 500 });
  }
}
