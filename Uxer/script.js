document.addEventListener('DOMContentLoaded', function() {
    // 遊戲狀態
    const gameState = {
        character: {
            name: "陳思涵",
            title: "財務經理",
            personality: "務實、謹慎、忠誠",
            fatigue: 35,
            motivation: 60
        },
        company: {
            name: "峰月設計",
            funds: 12450
        },
        story: {
            currentScene: "start",
            choices: []
        }
    };

    // 故事場景
    const scenes = {
        "start": {
            text: [
                "陳思涵瞪著電腦螢幕上的表格，第三次確認那個財務數字是否真的如此慘澹。",
                "紅色的數字仍然坐在那裡，像個不速之客，徹底破壞了她的星期一早晨。",
                "「不會好轉的，相信我。」她自言自語，按下更新鍵，希望那只是個噩夢。",
                "沒有任何改變。",
                "峰月設計的銀行帳戶觸底已經整整三個月了。",
                "她抬頭看了眼辦公室的時鐘——9:15。",
                "老闆江旭峰通常十點才會出現，還有四十五分鐘可以想出一個不那麼絕望的方案。",
                "電話突然響起，打斷了她的思緒。"
            ],
            choices: [
                { id: "answer-phone", text: "接起電話", nextScene: "phone-call" },
                { id: "ignore-phone", text: "忽略電話，繼續思考財務問題", nextScene: "ignore-call" },
                { id: "check-accounts", text: "再次檢查帳目，尋找可能的錯誤", nextScene: "check-accounts" }
            ]
        },
        "phone-call": {
            text: [
                "「峰月設計，您好。」她努力讓聲音顯得輕快愉悅。",
                "「請問是陳思涵小姐嗎？我是市政府數位服務處的林組長。」",
                "思涵立刻挺直了背脊。政府部門的電話？峰月設計從未承接過公部門的案子。",
                "「是的，我是。有什麼能幫您的嗎？」",
                "「我們正在尋找設計顧問協助改造市民服務平台的用戶體驗。江旭峰先生的名聲很受我們主管欣賞，想邀請貴公司參與投標。」",
                "思涵的心跳加速。他們需要這個案子，非常需要。但公部門專案的繁文縟節和限制…"
            ],
            choices: [
                { id: "accept-enthusiastically", text: "熱情接受邀請", nextScene: "accept-bid", effects: { motivation: +10, fatigue: +5 } },
                { id: "cautious-response", text: "謹慎回應，要求更多資訊", nextScene: "request-info", effects: { motivation: +5, fatigue: +2 } },
                { id: "express-concerns", text: "表達對公部門專案的擔憂", nextScene: "express-concerns", effects: { motivation: -5, fatigue: +5 } }
            ]
        },
        "ignore-call": {
            text: [
                "思涵讓電話繼續響著，專注於眼前的財務問題。",
                "也許她可以延遲一些供應商的付款，或者找一些小型快速的專案來增加現金流。",
                "電話鈴聲最終停止，但幾分鐘後，公司的信箱收到一封新郵件。",
                "發件人是市政府數位服務處。",
                "「有意思...」思涵喃喃自語，點開郵件。",
                "原來是市政府想邀請峰月設計參與他們的市民服務平台改造案投標。",
                "這可能是個機會，但也充滿了風險。"
            ],
            choices: [
                { id: "read-email-details", text: "仔細閱讀郵件細節", nextScene: "email-details", effects: { fatigue: +3 } },
                { id: "wait-for-boss", text: "等待江旭峰到來再討論", nextScene: "wait-for-boss", effects: { fatigue: -2 } },
                { id: "reply-immediately", text: "立即回覆表達初步興趣", nextScene: "reply-email", effects: { fatigue: +5, motivation: +5 } }
            ]
        },
        "check-accounts": {
            text: [
                "思涵深吸一口氣，再次打開財務表格，逐行檢查每一筆交易和數字。",
                "電話持續響著，但她決定先專注於眼前的任務。",
                "經過仔細核對，她發現了一個小錯誤——上個月有一筆來自客戶的付款被錯誤地記錄為較小的金額。",
                "修正這個錯誤後，情況稍微好轉，但公司的財務狀況依然嚴峻。",
                "電話停了，但很快公司信箱收到一封來自市政府數位服務處的郵件。",
                "看來是有關一個投標機會的邀請。"
            ],
            choices: [
                { id: "focus-on-finances", text: "繼續專注於改善財務狀況", nextScene: "improve-finances", effects: { fatigue: +8, motivation: -3 } },
                { id: "check-government-email", text: "查看市政府的郵件", nextScene: "government-email", effects: { fatigue: +3 } },
                { id: "prepare-for-boss", text: "準備向江旭峰匯報財務狀況和新機會", nextScene: "prepare-report", effects: { fatigue: +5, motivation: +2 } }
            ]
        },
        "request-info": {
            text: [
                "「聽起來很有趣，」思涵謹慎地回答，「可以請您發送詳細資訊給我嗎？」",
                "「當然，我這就發過去。投標期限是下週五，希望能收到貴公司的提案。」",
                "掛斷電話後，思涵深呼吸。這或許是他們的救命稻草，但也可能是浪費時間精力的坑。",
                "她已經經歷過太多次江旭峰對看似有意義的案子過度熱情，卻因客戶預算不符或要求不切實際而最終增加公司負擔的情況。",
                "幾分鐘後，市政府的郵件到達了她的收件匣。",
                "思涵快速瀏覽著項目說明。預算少得可憐，時程緊湊，需求模糊不清，還有一堆政府體系特有的繁複要求。",
                "典型的「天使陷阱」——看似美好但實際上是資源黑洞的項目。"
            ],
            choices: [
                { id: "analyze-proposal", text: "詳細分析投標要求和風險", nextScene: "analyze-risks", effects: { fatigue: +7, motivation: -2 } },
                { id: "wait-for-boss-opinion", text: "等待江旭峰的意見", nextScene: "boss-arrives", effects: { fatigue: -3 } },
                { id: "consult-team", text: "先諮詢團隊其他成員的看法", nextScene: "consult-team", effects: { fatigue: +4, motivation: +3 } }
            ]
        },
        // 更多場景可以根據需要添加...
        "boss-arrives": {
            text: [
                "「早安！我的朋友！」熟悉的聲音伴隨著辦公室大門被推開的聲響。",
                "江旭峰大步走進來，一如既往地精力充沛。他戴著那頂藍色貝雷帽，手臂下夾著一疊設計雜誌，另一手拿著冒著熱氣的咖啡。",
                "「思涵！我在路上想到一個絕妙的設計思考工作坊形式，可以——」",
                "「老闆等等，」思涵打斷他，「市政府剛剛打來電話，想邀請我們投標他們的市民服務平台改造案。」",
                "江旭峰停下腳步，眼睛瞬間發亮。「真的？這太棒了！」",
                "「我還沒看到詳細資訊，」思涵提醒道，「公部門的案子通常...」",
                "「這正是我們一直在等的機會！」江旭峰興奮地環顧四周，彷彿在確認辦公室是否足夠容納這個重大項目。"
            ],
            choices: [
                { id: "share-concerns", text: "分享對專案的擔憂", nextScene: "discuss-concerns", effects: { fatigue: +3, motivation: -2 } },
                { id: "show-enthusiasm", text: "附和老闆的熱情", nextScene: "join-enthusiasm", effects: { fatigue: +5, motivation: +8 } },
                { id: "mention-finances", text: "委婉提及公司的財務狀況", nextScene: "hint-finances", effects: { fatigue: +7, motivation: -5 } }
            ]
        }
    };

    // DOM元素
    const storyTextElement = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');
    const fatigueBar = document.getElementById('fatigue-bar');
    const fatigueValue = document.getElementById('fatigue-value');
    const motivationBar = document.getElementById('motivation-bar');
    const motivationValue = document.getElementById('motivation-value');
    const companyFunds = document.getElementById('company-funds');

    // 更新遊戲狀態顯示
    function updateStats() {
        fatigueBar.style.width = `${gameState.character.fatigue}%`;
        fatigueValue.textContent = `${gameState.character.fatigue}/100`;
        
        motivationBar.style.width = `${gameState.character.motivation}%`;
        motivationValue.textContent = `${gameState.character.motivation}/100`;
        
        companyFunds.textContent = `$${gameState.company.funds.toLocaleString()}`;
        
        // 檢查遊戲結束條件
        if (gameState.character.fatigue >= 100) {
            endGame("疲憊值達到上限，陳思涵生病了，無法繼續工作。");
            return;
        }
        
        if (gameState.character.motivation <= 0) {
            endGame("動機值歸零，陳思涵決定放棄，離開峰月設計尋找新的機會。");
            return;
        }
        
        if (gameState.company.funds <= 0) {
            endGame("公司資金耗盡，峰月設計被迫關閉。");
            return;
        }
    }

    // 顯示場景
    function showScene(sceneId) {
        const scene = scenes[sceneId];
        if (!scene) {
            console.error(`場景 ${sceneId} 不存在`);
            return;
        }
        
        // 清空現有內容
        storyTextElement.innerHTML = '';
        
        // 添加場景文字
        scene.text.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            storyTextElement.appendChild(p);
        });
        
        // 添加打字效果的游標
        const cursor = document.createElement('p');
        cursor.className = 'typing';
        cursor.textContent = '_';
        storyTextElement.appendChild(cursor);
        
        // 滾動到底部
        storyTextElement.scrollTop = storyTextElement.scrollHeight;
        
        // 更新選項
        choicesContainer.innerHTML = '';
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.dataset.choice = choice.id;
            button.dataset.nextScene = choice.nextScene;
            
            button.addEventListener('click', function() {
                // 應用選擇的效果
                if (choice.effects) {
                    if (choice.effects.fatigue) {
                        gameState.character.fatigue = Math.max(0, Math.min(100, gameState.character.fatigue + choice.effects.fatigue));
                    }
                    if (choice.effects.motivation) {
                        gameState.character.motivation = Math.max(0, Math.min(100, gameState.character.motivation + choice.effects.motivation));
                    }
                    if (choice.effects.funds) {
                        gameState.company.funds += choice.effects.funds;
                    }
                }
                
                // 更新狀態顯示
                updateStats();
                
                // 顯示下一個場景
                showScene(choice.nextScene);
            });
            
            choicesContainer.appendChild(button);
        });
        
        // 更新當前場景
        gameState.story.currentScene = sceneId;
    }

    // 遊戲結束
    function endGame(message) {
        storyTextElement.innerHTML = `<p>${message}</p><p>遊戲結束</p>`;
        choicesContainer.innerHTML = '<button class="choice-btn" id="restart-btn">重新開始</button>';
        
        document.getElementById('restart-btn').addEventListener('click', function() {
            // 重置遊戲狀態
            gameState.character.fatigue = 35;
            gameState.character.motivation = 60;
            gameState.company.funds = 12450;
            
            // 重新開始遊戲
            showScene('start');
            updateStats();
        });
    }

    // 初始化遊戲
    function initGame() {
        showScene('start');
        updateStats();
        
        // 鍵盤快捷鍵
        document.addEventListener('keydown', function(e) {
            // 數字鍵 1-9 選擇選項
            if (e.key >= '1' && e.key <= '9') {
                const index = parseInt(e.key) - 1;
                const buttons = choicesContainer.querySelectorAll('.choice-btn');
                if (index < buttons.length) {
                    buttons[index].click();
                }
            }
        });
    }

    // 啟動遊戲
    initGame();
});