
export interface User {
  id: string;
  email: string;
  name?: string;
}

export async function getCurrentUser(): Promise<User | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const mockUserId = "user123";
  console.log(mockUserId);
  const storedUser = localStorage.getItem("my_real_estate_user");

  if (storedUser) {
    return JSON.parse(storedUser) as User;
  }

  return null;
}

export async function signIn(email: string, password: string): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (email === "test@example.com" && password === "password") {
    const user: User = { id: "user123", email, name: "Test Kullanıcı" };
    localStorage.setItem("my_real_estate_user", JSON.stringify(user));
    return user;
  }
  throw new Error("Geçersiz e-posta veya şifre.");
}

export async function signOut(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  localStorage.removeItem("my_real_estate_user");
  console.log("Kullanıcı oturumu kapatıldı.");
}
