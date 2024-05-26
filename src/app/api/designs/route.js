export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    const designs = [
      {
        id: 1,
        profile: "https://cdn.dribbble.com/users/210795/avatars/normal/e1a7554340cf87d0a791995933d2ace5.jpeg?1655854176",
        imageUrl: "https://cdn.dribbble.com/userupload/14554815/file/original-6b126541356616601a79abd27c235ef9.jpg?resize=1024x1024",
        likes: 4.5,
        host: "Jim Kennelly",
      },
      {
        id: 2,
        profile: "https://cdn.dribbble.com/users/1355613/avatars/normal/831fdf7b18127d618349cc7093a9efcb.jpg?1627270435",
        imageUrl: "https://cdn.dribbble.com/userupload/14713091/file/original-d4ab8625e111fc5dfba197c0f0b9db24.jpg?resize=1200x900",
        likes: 4.5,
        host: "Jim Kennelly",
      },
      {
        id: 3,
        profile: "https://cdn.dribbble.com/users/28275/avatars/small/7af4beb8def59fa3d16e2f817bdbe4ea.png?1519742083",
        imageUrl: "https://cdn.dribbble.com/userupload/14631505/file/original-193b558cb064e7c48864d7914c0b3d17.jpg?resize=1200x900",
        likes: 4.5,
        host: "Jim Kennelly",
      },
      {
        id: 4,
        profile: "https://cdn.dribbble.com/users/730703/avatars/small/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934",
        imageUrl: "https://cdn.dribbble.com/userupload/14363798/file/original-8340a1c251d3bbfae40d719a175a4a6e.jpg?resize=1024x1267",
        likes: 4.5,
        host: "Jim Kennelly",
      },
      {
        id: 5,
        profile: "https://cdn.dribbble.com/users/1090020/avatars/small/d23f008283d8a8ff907a5cba30138824.png?1687344641",
        imageUrl: "https://cdn.dribbble.com/userupload/14680971/file/original-a7ba3ce04665f3dcaa9b25d831d6d8e6.png?resize=1200x900",
        likes: 4.5,
        host: "Jim Kennelly",
      },
      {
        id: 6,
        profile: "https://cdn.dribbble.com/users/210795/avatars/normal/e1a7554340cf87d0a791995933d2ace5.jpeg?1655854176",
        imageUrl: "https://cdn.dribbble.com/userupload/14671402/file/original-0b83a93a7c97dc8b9c75f60940e3bbe9.png?resize=1200x900",
        likes: 4.5,
        host: "Jim Kennelly",
      },
      {
        id: 7,
        profile: "https://cdn.dribbble.com/users/1037/avatars/small/845ff4b0089438c6518f392d59f55b1f.png?1673276678",
        imageUrl: "https://cdn.dribbble.com/userupload/14555369/file/original-c5ebb60b221f7e0d7969e4b3196340e5.jpg?resize=1200x900",
        likes: 4.5,
        host: "Jim Kennelly",
      },
    ];
  
    if (id) {
      const design = designs.find(d => d.id === parseInt(id));
      if (design) {
        return new Response(JSON.stringify(design), { status: 200 });
      } else {
        return new Response(JSON.stringify({ error: 'design not found' }), { status: 404 });
      }
    }
  
    return new Response(JSON.stringify(designs), { status: 200 });
  }
  