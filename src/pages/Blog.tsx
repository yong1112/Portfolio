import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, Tag } from 'antd';

const { Title, Paragraph } = Typography;

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  category: string;
}

const Blog = () => {
  const [posts] = useState<BlogPost[]>([
    {
      slug: 'metacognition-ai-systems',
      title: 'Designing for Metacognition in AI-Assisted Learning',
      date: 'Jan 15, 2024',
      excerpt: 'How can we build AI systems that strengthen student thinking rather than replace it? Exploring scaffolding strategies grounded in cognitive science.',
      readTime: '8 min read',
      category: 'Research'
    },
    {
      slug: 'cognitive-offloading',
      title: 'The Cognitive Offloading Problem in Educational AI',
      date: 'Jan 10, 2024',
      excerpt: 'When students rely too heavily on AI tools, learning suffers. A framework for designing systems that maintain cognitive engagement.',
      readTime: '6 min read',
      category: 'Theory'
    },
    {
      slug: 'systems-thinking-education',
      title: 'Systems Thinking in Education Technology',
      date: 'Jan 5, 2024',
      excerpt: 'Why isolated features fail and coherent architectures succeed. Lessons from building research-driven learning systems.',
      readTime: '5 min read',
      category: 'Design'
    }
  ]);

  return (
    <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2 }}>
          Writing
        </Paragraph>
        <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 16 }}>
          Research & <span className="gradient-text">Reflections</span>
        </Title>
        <Paragraph style={{ fontSize: 20, marginBottom: 64 }}>
          Exploring human-centred AI, learning systems, and education research
        </Paragraph>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {posts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card hoverable className="glass" style={{ borderRadius: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <Tag color="red">{post.category}</Tag>
                  <Paragraph style={{ margin: 0, fontSize: 14 }}>{post.date}</Paragraph>
                  <Paragraph style={{ margin: 0, fontSize: 14 }}>•</Paragraph>
                  <Paragraph style={{ margin: 0, fontSize: 14 }}>{post.readTime}</Paragraph>
                </div>
                <Title level={3} style={{ marginBottom: 16 }}>{post.title}</Title>
                <Paragraph style={{ fontSize: 18, marginBottom: 16 }}>{post.excerpt}</Paragraph>
                <span style={{ color: '#9A0000' }}>Read article →</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
