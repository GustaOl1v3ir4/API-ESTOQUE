const bcrypt = require("bcrypt")
const modelUser = require("./src/model/user")
const sequelize = require("./src/database")

async function resetPassword(email, newPassword) {
  try {
    console.log(`🔍 Procurando usuário com email: ${email}...`);

    // Busca usuário
    const user = await modelUser.findOne({ where: { email } });
    if (!user) {
      console.log("❌ Usuário não encontrado!");
      return;
    }

    console.log("✅ Usuário encontrado:", user.email);

    // Gera o hash da nova senha
    const hashed = await bcrypt.hash(newPassword, 12);
    console.log("🔑 Nova senha gerada (hash):", hashed);

    // Atualiza senha
    user.password = hashed;
    await user.save();

    console.log(`🎉 Senha do usuário ${email} alterada com sucesso!`);
  } catch (error) {
    console.error("⚠️ Erro ao alterar senha:", error);
  } finally {
    await sequelize.close();
    console.log("🔌 Conexão fechada.");
  }
}

// Executar para o usuário específico
resetPassword("teste@teste.com", "123");