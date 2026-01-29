import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, Tag } from 'antd';
import { useTheme } from '../contexts/ThemeContext';

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
  const { isHobbyMode } = useTheme();

  const [workPosts] = useState<BlogPost[]>([
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

  const [hobbyPosts] = useState<BlogPost[]>([
    {
      slug: 'acrylic-painting-journey',
      title: 'Finding Peace Through Acrylic Painting',
      date: 'Jan 20, 2024',
      excerpt: 'How I discovered that painting is meditation. Colors, textures, and the joy of creating something tangible.',
      readTime: '7 min read',
      category: 'Art'
    },
    {
      slug: 'gaming-therapy',
      title: 'Gaming as Creative Escape & Community',
      date: 'Jan 18, 2024',
      excerpt: 'Beyond the gameplay: why I love Stardew Valley, Dota 2, and story-driven games. Gaming as modern storytelling.',
      readTime: '9 min read',
      category: 'Gaming'
    },
    {
      slug: 'poetry-in-everyday',
      title: 'Finding Poetry in Everyday Moments',
      date: 'Jan 12, 2024',
      excerpt: 'How poetry teaches me to slow down and appreciate the beauty in the ordinary. Reflections on language and emotion.',
      readTime: '6 min read',
      category: 'Writing'
    },
    {
      slug: 'drama-character-studies',
      title: 'Character Arcs That Changed Me: Drama Reviews',
      date: 'Jan 8, 2024',
      excerpt: 'Analyzing powerful characters from my favorite dramas. How storytelling shapes our understanding of emotions and relationships.',
      readTime: '10 min read',
      category: 'Media'
    },
    {
      slug: 'language-learning-adventure',
      title: 'Languages as Keys to New Worlds',
      date: 'Jan 5, 2024',
      excerpt: 'My endless journey learning new languages. How each language opens doors to different cultures and ways of thinking.',
      readTime: '8 min read',
      category: 'Learning'
    },
    {
      slug: 'music-emotional-companion',
      title: 'Music: The Universal Language of the Soul',
      date: 'Dec 30, 2023',
      excerpt: 'How music connects me to emotions I can\'t always express in words. Playlist discoveries and genre exploration.',
      readTime: '7 min read',
      category: 'Music'
    }
  ]);

  if (isHobbyMode) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2 }}>
            Musings
          </Paragraph>
          <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 16 }}>
            Creative <span className="gradient-text">Reflections</span>
          </Title>
          <Paragraph style={{ fontSize: 20, marginBottom: 64 }}>
            Thoughts on art, gaming, poetry, languages, and the joy of creative exploration
          </Paragraph>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {hobbyPosts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card hoverable className="glass" style={{ borderRadius: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <Tag color="default" style={{ backgroundColor: '#FFA5C9', color: 'white', border: 'none' }}>{post.category}</Tag>
                    <Paragraph style={{ margin: 0, fontSize: 14 }}>{post.date}</Paragraph>
                    <Paragraph style={{ margin: 0, fontSize: 14 }}>•</Paragraph>
                    <Paragraph style={{ margin: 0, fontSize: 14 }}>{post.readTime}</Paragraph>
                  </div>
                  <Title level={3} style={{ marginBottom: 16 }}>{post.title}</Title>
                  <Paragraph style={{ fontSize: 18, marginBottom: 16 }}>{post.excerpt}</Paragraph>
                  <span style={{ color: '#FFA5C9' }}>Read article →</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
