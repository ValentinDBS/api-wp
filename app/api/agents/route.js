import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://valorant-api.com/v1/agents');
    if (!response.ok) {
      throw new Error('Failed to fetch agents');
    }
    const data = await response.json();
    const agents = data.data.map(agent => ({
      displayName: agent.displayName,
      uuid: agent.uuid,
      role : agent.role
    }));
    return NextResponse.json(agents);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch agents' }, { status: 500 });
  }
}
