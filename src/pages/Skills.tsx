import { Typography, Row, Col, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Skills = () => {
  const skills = [
    { category: 'Systems Design', items: ['Architecture thinking', 'Scalable systems', 'API design', 'Database modeling'], icon: '⚙️' },
    { category: 'AI & ML', items: ['Human-centred AI', 'NLP systems', 'Prompt engineering', 'Model integration'], icon: '🤖' },
    { category: 'Research Methods', items: ['Design-based research', 'User studies', 'Evaluation frameworks', 'Literature synthesis'], icon: '🔬' },
    { category: 'Education Theory', items: ['Metacognition', 'Cognitive offloading', 'Scaffolding design', 'Learning sciences'], icon: '📚' },
    { category: 'Development', items: ['React/TypeScript', 'Python', 'Node.js', 'PostgreSQL'], icon: '💻' },
    { category: 'Academic Skills', items: ['Technical writing', 'Research communication', 'Interdisciplinary collaboration', 'Grant writing'], icon: '✍️' }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2 }}>
          Capabilities
        </Paragraph>
        <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 64 }}>
          Research & <span className="gradient-text">Technical Skills</span>
        </Title>
        
        <Row gutter={[24, 24]}>
          {skills.map(({ category, items, icon }) => (
            <Col xs={24} md={8} key={category}>
              <Card className="glass" hoverable style={{ borderRadius: 16, height: '100%' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
                <Title level={3} className="gradient-text" style={{ marginBottom: 24 }}>{category}</Title>
                <ul style={{ paddingLeft: 20 }}>
                  {items.map(skill => (
                    <li key={skill} style={{ marginBottom: 12 }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: 128, paddingTop: 64, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 32 }}>
            Approach
          </Paragraph>
          <Card className="glass" style={{ borderRadius: 16, padding: 32 }}>
            <Paragraph style={{ fontSize: 20, lineHeight: 1.8, margin: 0 }}>
              I combine systems engineering discipline with education research rigor. 
              Every design decision is grounded in evidence. Every system is built to serve learning, not automation.
              I translate complex theory into practical, maintainable tools that researchers and educators can actually use.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
